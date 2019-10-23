import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    
    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return(
            <ScrollView>
                <Card title='Contact Information'>
                    <View>
                        <Text>
                            121, Clear Water Bay Road{'\n\n'}
                            Clear Water Bay, Kowloon{'\n\n'}
                            HONG KONG{'\n\n'}
                            Tel: +852 1234 5678{'\n\n'}
                            Fax: +852 8765 4321{'\n\n'}
                            Email:confusion@food.net
                        </Text>
                    </View>
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;