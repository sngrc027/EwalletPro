import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from '../assets/CSS/InputFile';
import {FontSize} from '../assets/Fonts/FontSize';
import Header from '../util/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Rect, Text as TextSVG, Svg} from 'react-native-svg';
import {
  WHITE,
  PRIMARY_COLOR,
  BLACK,
  GRAY,
  LIGHT_GRAY,
} from '../assets/colors/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {LineChart} from 'react-native-chart-kit';

const Statistics = () => {
  const [select, setSelect] = useState(0);
  const [Index, setIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);

  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });
  console.log('>>>>>>>>>>>>>>>>', tooltipPos);
  const Day = ['Day', 'Week', 'Month', 'Year'];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const [record, setRecord] = useState([
    {
      src: require('../assets/Images/spotify.png'),
      name: 'Spotify',
      time: 'Today',
      amt: '+$ 850.00',
      color: '#2ed573',
    },
    {
      src: require('../assets/Images/you.png'),
      name: 'Youtube',
      time: 'Jan 16,2022',
      amt: '-$ 11.99',
      color: '#e55039',
    },
    {
      src: require('../assets/Images/pay.png'),
      name: 'Paypal',
      time: 'Jan 30,2022',
      amt: '+$ 1406.00',
      color: '#2ed573',
    },
    {
      src: require('../assets/Images/up.png'),
      name: 'Upwork',
      time: 'Today',
      amt: '+$ 1850.00',
      color: '#2ed573',
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{...styles.container}}>
        <View style={{width: wp('100%'), height: hp('15%')}}>
          <Header name={'Statistics'} />
        </View>

        {/* ///////////////////////////////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('85%'),
          }}>
          {Day.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => setSelect(i)}
                key={i}
                style={{
                  backgroundColor: select == i ? PRIMARY_COLOR : null,
                  padding: 10,
                  width: wp('17%'),
                  borderRadius: wp('2%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: select == i ? WHITE : LIGHT_GRAY}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [525, 352, 645, 446, 455, 779],
                },
              ],
            }}
            width={wp('120%')} // from react-native
            height={hp('30%')}
            withInnerLines={false}
            withOuterLines={false}
            withHorizontalLabels={false}
            onDataPointClick={(data, index) => {
              setDotIndex(index);
              let isSamePoint =
                tooltipPos.x === data.x && tooltipPos.y === data.y;

              isSamePoint
                ? setTooltipPos(previousState => {
                    return {
                      ...previousState,
                      value: data.value,
                      visible: !previousState.visible,
                    };
                  })
                : setTooltipPos({
                    x: data.x,
                    value: data.value,
                    y: data.y,
                    visible: true,
                  });
            }}
            decorator={() => {
              return tooltipPos.visible ? (
                <View>
                  <Svg>
                    <Rect
                      x={tooltipPos.x - 35}
                      y={tooltipPos.y - 20}
                      width="50"
                      height="30"
                    />
                    <TextSVG
                      x={Math.round(tooltipPos.x)}
                      y={Math.round(tooltipPos.y) - 15}
                      fill="black"
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="middle">
                      $ {Math.round(tooltipPos.value)}
                    </TextSVG>
                  </Svg>
                </View>
              ) : null;
            }}
            doubleTapToZoomEnabled={true}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}
            keepPositionOnRotation={false}
            chartConfig={{
              backgroundColor: BLACK,
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: 'transparant',
              decimalPlaces: 2,
              // optional, defaults to 2dp
              color: (opacity = 0) => PRIMARY_COLOR,
              labelColor: (opacity = 1) => GRAY,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wp('92%'),
            marginTop: hp('3%'),
            paddingBottom: 6,
          }}>
          <Text
            style={{...styles.title, fontSize: FontSize.medium, color: BLACK}}>
            Top Spending
          </Text>
          <TouchableOpacity>
            <AntDesign
              style={{
                transform: [{rotate: '90deg'}],
              }}
              name="swap"
              size={25}
              color={GRAY}
            />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
          <View style={{alignItems: 'center', marginTop: hp('0%')}}>
            <FlatList
              contentContainerStyle={{paddingBottom: hp('2%')}}
              keyExtractor={(item, index) => item.id}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={record}
              horizontal={false}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={index == Index ? my.card : my.cardshade}
                  onPress={() => setIndex(index)}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        backgroundColor: '#F0F6F5',
                        padding: 0,
                        borderRadius: wp('12%'),
                      }}>
                      <Image
                        source={item.src}
                        style={{
                          width: wp('10%'),
                          height: hp('5%'),
                          resizeMode: 'contain',
                        }}
                      />
                    </View>

                    <View style={{marginLeft: wp('3%')}}>
                      <Text
                        style={{
                          ...styles.title,
                          fontSize: FontSize.small,
                          color: index == Index ? WHITE : BLACK,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          ...styles.sub,
                          color: index == Index ? WHITE : GRAY,
                        }}>
                        {item.time}
                      </Text>
                    </View>
                  </View>

                  <View style={{marginTop: 5}}>
                    <Text
                      style={{
                        ...styles.title,
                        fontSize: FontSize.medium,
                        color: index == Index ? WHITE : item.color,
                      }}>
                      {item.amt}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Statistics;

const my = StyleSheet.create({
  card: {
    shadowColor: PRIMARY_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('85%'),
    margin: hp('1%'),
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: PRIMARY_COLOR,
    width: wp('90%'),
  },
  cardshade: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('85%'),
    margin: hp('1%'),
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    width: wp('90%'),
  },
});
