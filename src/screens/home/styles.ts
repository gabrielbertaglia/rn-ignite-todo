import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,

    marginTop: -56/2

  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 16,
    height: 56,
    borderRadius: 6,
    fontSize: 16,

    borderColor: '#0D0D0D',
    borderWidth: 1,
    color: '#F2F2F2',
  },
  inputFocused: {
    borderColor: '#5E60CE',
  },
  addButton: {
    padding: 18,
    backgroundColor: '#1E6F9F',
    borderWidth: 1,
    borderColor: '#1E6F9F',
    borderRadius: 6,

    height: 'auto',
  },
})