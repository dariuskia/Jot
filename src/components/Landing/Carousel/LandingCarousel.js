import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselFirst from '../../../../assets/img/carousel1.svg'
import CarouselSecond from '../../../../assets/img/carousel2.svg'
import CarouselThird from '../../../../assets/img/carousel3.svg'
import styles from './StylesLandingCarousel'

export default class LandingCarousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeSlide: 0,
			entries: [
				{
					text: 'Write entries in a friendly chat interface.',
					img: <CarouselFirst />,
				},
				{
					text: 'Get points from writing entries.',
					img: <CarouselSecond />,
				},
				{
					text: 'Lock sensitive entries in a password protected vault.',
					img: <CarouselThird />,
				},
			],
		}
	}
	_renderItem = ({ item, index }) => {
		return (
			<View>
				{item.img}
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
					marginHorizontal: 8,
					backgroundColor: 'rgba(255, 255, 255, 0.92)',
				}}
				inactiveDotStyle={
					{
						// Define styles for inactive dots here
					}
				}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		)
	}

	render() {
		return (
			<View>
				<Carousel
					ref={(c) => {
						this._carousel = c
					}}
					data={this.state.entries}
					renderItem={this._renderItem}
					layout={'default'}
					sliderWidth={300}
					itemWidth={270}
					itemHeight={220}
					// onSnapToItem={(index) => this.setState({ activeIndex: index })}
					// enableSnap={true}
					// loop={true}
				/>
				{this.pagination}
			</View>
		)
	}
}
