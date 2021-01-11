import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import ListItem from '../components/ListItem'
import useFetch from '../hooks/useFetch'
import usefetch from '../hooks/useFetch'
const styles= StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		alignItems:'flex-start',
		justifyContent:'flex-start'
	},
	list:{
		alignSelf:'stretch'
	}
})
// const data = [
// 	{ _id:'1', name:'churrasco', desc:'plato títpico'},
// ]
const Meals = ({navigation})=>{
	const {loading, data : meals} = usefetch('https://serverless.nor-norit-nor.vercel.app/api/meals')

	return (
		<View style={styles.container}>
			{loading ? <Text>Cargando...</Text> : 
			<FlatList 
			style={styles.list}
			data={meals}
			keyExtractor={x => x._id}
			renderItem={({item})=>
				<ListItem 
				onPress={()=>navigation.navigate('Modal', { _id: item._id })}
				name={item.name}
				/>
			}
		/>	}
		</View>
	)
}
Meals.navigationOptions = ({
	title: 'Comidas disponibles',
})

export default Meals