import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderComponet from '../components/HeaderComponet';
import CustomButton from '../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const BookingsScreen = ({navigation}: any) => {
  const [activeTab, setActiveTab] = useState(0); // 0 for Adhoc, 1 for Recurring
  const [activeNavTab, setActiveNavTab] = useState(0);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const handleTabChange = index => {
    setActiveTab(index);
    Animated.spring(slideAnimation, {
      toValue: index * (width / 2 - 20),
      tension: 70,
      friction: 9,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.safeArea}>
      <HeaderComponet
        title="Schdule"
        LeftComponent={
          <View>
            <Text style={{color: '#fff', fontSize: 18}}>Recurring</Text>
          </View>
        }
        RightComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications-sharp" color="#fff" size={30} />
          </TouchableOpacity>
        }
      />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.tabSwitchContainer}>
            <Animated.View
              style={[
                styles.tabIndicator,
                {transform: [{translateX: slideAnimation}]},
              ]}
            />

            <TouchableOpacity
              style={[styles.tab, activeTab === 0 && styles.activeTab]}
              onPress={() => handleTabChange(0)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 0 && styles.activeTabText,
                ]}>
                In-Progress
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab, activeTab === 1 && styles.activeTab]}
              onPress={() => handleTabChange(1)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 1 && styles.activeTabText,
                ]}>
                Completed
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              //   borderWidth: 1,
            }}>
            <Text style={{color: '#CCC'}}>No Booking Found</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#F12D99',
            position: 'absolute',
            bottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            left: 20,
          }}>
          <MaterialCommunityIcons name="filter" color="#fff" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#F12D99',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 20,
            right: 20,
          }}>
          <FontAwesome name="calendar" color="#fff" size={24} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  tabSwitchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    height: 50,
    position: 'relative',
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  tabIndicator: {
    position: 'absolute',
    width: width / 2 - 20,
    height: 40,
    backgroundColor: '#a8ce2e',
    borderRadius: 8,
    top: 5,
    left: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
  },
  activeTabText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
  },
  buttonsContainer: {alignItems: 'center'},
  button: {
    backgroundColor: '#ffffff',
    width: '95%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  bottomNavContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
  },
  navTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#ddd',
    borderRadius: 12,
    marginBottom: 4,
  },
  activeNavIcon: {
    backgroundColor: '#3498db',
  },
  navText: {
    fontSize: 12,
    color: '#888',
  },
  activeNavText: {
    color: '#3498db',
    fontWeight: '500',
  },
});

export default BookingsScreen;
