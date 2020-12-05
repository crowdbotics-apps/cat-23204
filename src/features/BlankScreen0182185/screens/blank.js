import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/CA5921A3-BBDC-4448-97A0-8CCBED77E5E3_1_102_o.jpeg"
      }}
      style={styles.ImageBackground_1}
    />
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: {
    width: 200,
    height: 330,
    paddingLeft: 300,
    paddingRight: 500,
    paddingBottom: 300,
    alignSelf: "center"
  }
})
