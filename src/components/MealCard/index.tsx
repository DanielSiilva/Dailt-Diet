import {View, Text} from 'react-native'

type MealCardTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface Props {
  type: MealCardTypeStyleProps;
}

interface MealCardProps {
  name: string;
  hour: string;
  type: MealCardTypeStyleProps;
}

export function MelCard ({hour, name, type}:MealCardProps){

     return (
        <View>
            <Text>{hour}</Text>
            <View>
                <Text>{name}</Text>
            </View>
        </View>
     )
}