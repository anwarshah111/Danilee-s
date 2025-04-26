import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderComponet from '../../components/HeaderComponet';
import CustomButton from '../../components/Button';

const {width} = Dimensions.get('window');

const HomeScreen = ({navigation}: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const [location, setLocation] = useState('Location');

  useEffect(() => {
    setTimeout(() => {
      setLocation("DaniLee's Pelham, NY");
    }, 1000);
  }, []);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    Animated.spring(slideAnimation, {
      toValue: index * (width / 2 - 20),
      tension: 70,
      friction: 9,
      useNativeDriver: true,
    }).start();
  };

  const buttons = ['Select Service', 'Select Date', 'Select Time'];
  const Secondsbuttons = ['Select Service', 'Select Date'];

  return (
    <View style={styles.safeArea}>
      <HeaderComponet
        title="Schdule"
        RightComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications-sharp" color="#fff" size={30} />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <Text style={{fontSize: 28, color: '#000', fontWeight: '600'}}>
              Schedule a Service
            </Text>
          </View>

          {/* Tab Switch */}
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
                Adhoc
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
                Recurring
              </Text>
            </TouchableOpacity>
          </View>

          {/* Content Area */}
          <View style={styles.contentContainer}>
            {activeTab === 1 ? (
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>{location}</Text>
                </TouchableOpacity>
                {Secondsbuttons.map((button, index) => (
                  <TouchableOpacity key={index} style={styles.button}>
                    <Text style={styles.buttonText}>{button}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>{location}</Text>
                </TouchableOpacity>
                {buttons.map((button, index) => (
                  <TouchableOpacity key={index} style={styles.button}>
                    <Text style={styles.buttonText}>{button}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
        <CustomButton
          title={'Next'}
          onPress={() => {}}
          customStyle={{marginVertical: 16, marginHorizontal: 15}}
        />
        <CustomButton
          title={'See All Plans'}
          onPress={() => {}}
          customStyle={{marginBottom: 16, marginHorizontal: 15}}
        />
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

export default HomeScreen;
