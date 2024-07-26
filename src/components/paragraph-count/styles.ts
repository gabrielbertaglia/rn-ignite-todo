import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8
  },
  created: {
    color: '#4EA8DE',
    // fontWeight: 'bold',
    fontFamily: 'Inter_700Bold'
  },
  finished: {
    color: '#8284FA',
    fontWeight: 'bold',
  },
  count: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    color: '#D9D9D9',
    backgroundColor: '#333333',
    fontWeight: 'bold',
    borderRadius: 999
  }
})