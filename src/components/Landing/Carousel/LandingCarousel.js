import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselFirst from '../../../../assets/img/carousel1.svg'
import CarouselSecond from '../../../../assets/img/carousel2.svg'
import CarouselThird from '../../../../assets/img/carousel3.svg'
import styles from './StylesLandingCarousel'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class LandingCarousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeSlide: 0,
			entries: [
				{
					text: 'Write entries in a friendly chat interface.',
					img: <CarouselFirst width={270} height={220} />,
				},
				{
					text: 'Get points from writing entries.',
					img: <CarouselSecond width={270} height={220} />,
				},
				{
					text: 'Lock sensitive entries in a password protected vault.',
					img: <CarouselThird width={270} height={220} />,
				},
			],
		}
	}
	_renderItem = ({ item, index }) => {
		return (
			<View>
				<View>{item.img}</View>
				<Text style={styles.text}>{item.text}</Text>
			</View>
		)
	}
	get pagination() {
		const { entries, activeSlide } = this.state
		return (
			<Pagination
				dotsLength={entries.length}
				activeDotIndex={activeSlide}
				containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 2,
					backgroundColor: 'rgba(255, 255, 255, 0.50)',
				}}
				inactiveDotStyle={{
					width: 15,
					height: 15,
					borderRadius: 20,
					backgroundColor: 'rgb(255, 255, 255)',
				}}
				inactiveDotOpacity={0.1}
				inactiveDotScale={0.6}
			/>
		)
	}

	render() {
		return (
			<View>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<TouchableOpacity
						style={styles.arrowLeft}
						onPress={() => this._carousel.snapToPrev()}>
						<Icon name="chevron-left" color="#fff" size={40} />
					</TouchableOpacity>
					<Carousel
						ref={(c) => {
							this._carousel = c
						}}
						data={this.state.entries}
						renderItem={this._renderItem}
						layout={'default'}
						sliderWidth={290}
						itemWidth={270}
						onSnapToItem={(index) => this.setState({ activeSlide: index })}
						// enableSnap={true}
						// loop={true}
					/>
					<TouchableOpacity
						style={styles.arrowRight}
						onPress={() => this._carousel.snapToNext()}>
						<Icon name="chevron-right" color="#fff" size={40} />
					</TouchableOpacity>
				</View>
				{this.pagination}
			</View>
		)
	}
}
