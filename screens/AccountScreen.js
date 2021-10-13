import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import tw from "tailwind-react-native-classnames";
import BottomTabs from "../EatsComponents/Home/BottomTabs";

const AccountScreen = ({ navigation }) => {
  const [activeMenu, setActiveMenu] = useState("Account");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 25 : 0,
      }}
    >
      <View style={tw`flex-1 justify-between`}>
        <View>
          <Icon icon="user-circle" text="John Doe" color="gray" />
          <Divider width={1} />
        </View>
        <ScrollView style={tw`w-full`}>
          <View style={tw`items-start`}>
            <Icon
              icon="receipt"
              text="Orders"
              onPress={() => navigation.navigate("OrdersScreen")}
            />
            <Icon icon="shield-alt" text="COVID-19 security center" />
            <Icon icon="heart" text="Your Favorites" />
            <Icon icon="star" text="Restaurant Loyalty Membership" />
            <Icon icon="wallet" text="Wallet" />
            <Icon icon="briefcase" text="Professionnal Preferences" />
            <Icon icon="plus-circle" text="Help" />
            <Icon icon="tag" text="Sales" />
            <Icon icon="ticket-alt" text="Uber Eats Pass" />
            <Icon icon="shopping-bag" text="Deliver with Uber" />
            <Icon icon="cog" text="Settings" />
            <IconBurger />
          </View>
          <View style={tw`ml-5 mb-28`}>
            <TouchableOpacity>
              <Text style={tw`mb-10 mt-3`}>
                How Uber and Uber Eats apps and website work
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>About</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <BottomTabs
          navigation={navigation}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const IconBurger = () => (
  <View style={tw`flex-row py-3 bg-green-100`}>
    <TouchableOpacity style={tw`w-full flex-row items-center`}>
      <View style={tw`w-14 mr-2 justify-center items-center`}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/4d/1a/e6/4d1ae67b7e418b3cf69e2a512dfda2fb.png",
          }}
          style={tw`w-8 h-8`}
        />
      </View>
      <View style={tw`w-full`}>
        <Text style={tw`font-semibold text-green-900`}>
          $5 free on your order
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const Icon = (props) => (
  <TouchableOpacity style={tw`w-full`} onPress={props.onPress}>
    <View style={tw`flex-row my-5 items-center`}>
      <View style={tw`w-14 justify-center items-center`}>
        <FontAwesome5
          name={props.icon}
          size={25}
          color={`${props.color ? props.color : "black"}`}
        />
      </View>
      <View style={tw`w-full`}>
        <Text style={tw`font-medium text-base`}>{props.text}</Text>
      </View>
    </View>
  </TouchableOpacity>
);