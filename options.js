import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
export default function Number() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [Result, setResult] = useState('');

  const handleNumberPress = Textvalue => {
    setFirstNumber(firstNumber + Textvalue);
  };

  const handleOperationPress = Textvalue => {
    setOperation(Textvalue);
    setSecondNumber(firstNumber || Result);
    setFirstNumber('');
    setResult('');
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult('');
  };

  const handleDeletePress = Textvalue => {
    let TextValue = firstNumber?.slice(0, -1);
    setFirstNumber(TextValue);
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();
        setResult(parseFloat(secondNumber) + parseFloat(firstNumber || 0));
        break;
      case '-':
        clear();
        setResult(parseFloat(secondNumber) - parseFloat(firstNumber || 0));
        break;
      case '*':
        clear();
        setResult(parseFloat(secondNumber) * parseFloat(firstNumber || 0));
        break;
      case '/':
        clear();
        setResult(parseFloat(secondNumber) / parseFloat(firstNumber || 0));
        break;
      case '%':
        clear();
        setResult(parseFloat(secondNumber) % parseFloat(firstNumber));
        break;
      default:
        clear();
        setResult();
        break;
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 2.49,
          backgroundColor: '#000000',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 35,
            marginRight: 40,
            marginTop: 80,
          }}>
          {secondNumber}
        </Text>
      </View>

      <View
        style={{
          flex: 1.24,
          backgroundColor: '#000000',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 60,
            marginRight: 40,
          }}>
          {firstNumber || Result || '0'}
        </Text>
      </View>

      <View style={{flex: 6.66, backgroundColor: '#000000'}}>
        <View
          style={{
            flex: 1.33,
            backgroundColor: '#000000',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#c0c0c0',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 30,
              width: 65,
              height: 65,
            }}
            onPress={() => clear('')}>
            <Text style={{fontSize: 35, color: '#000000'}}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#c0c0c0',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 15,
              width: 65,
              height: 65,
            }}
            onPress={() => handleDeletePress('')}>
            <Text style={{color: '#000000', fontSize: 35}}>Del</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#c0c0c0',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 15,
              width: 65,
              height: 65,
            }}
            onPress={() => handleOperationPress('%')}>
            <Text style={{color: '#000000', fontSize: 35}}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#EAAA00',
              borderRadius: 35,
              justifyContent: 'center',
              marginLeft: 15,
              width: 65,
              height: 65,
            }}
            onPress={() => handleOperationPress('/')}>
            <Text style={{color: '#ffffff', fontSize: 35}}>/</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1.33,
            backgroundColor: '#000000',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 30,
              height: 65,
              width: 65,
            }}
            onPress={() => handleNumberPress('7')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              marginLeft: 15,
              justifyContent: 'center',
              width: 65,
              height: 65,
            }}
            onPress={() => handleNumberPress('8')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 15,
              width: 65,
              height: 65,
            }}
            onPress={() => handleNumberPress('9')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#EAAA00',
              borderRadius: 32.5,
              marginLeft: 15,
              justifyContent: 'center',

              width: 65,
              height: 65,
            }}
            onPress={() => handleOperationPress('*')}>
            <Text
              style={{
                fontSize: 35,
                textAlign: 'center',
                color: '#ffffff',
              }}>
              *
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1.33,
            backgroundColor: '#000000',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 30,
              height: 65,
              width: 65,
            }}
            onPress={() => handleNumberPress('4')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              marginLeft: 15,
              justifyContent: 'center',
              width: 65,
              height: 65,
            }}
            onPress={() => handleNumberPress('5')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 15,
              width: 65,
              height: 65,
            }}
            onPress={() => handleNumberPress('6')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#EAAA00',
              borderRadius: 35,
              marginLeft: 15,
              justifyContent: 'center',
              width: 65,
              height: 65,
            }}
            onPress={() => handleOperationPress('-')}>
            <Text
              style={{
                fontSize: 35,
                color: '#ffffff',
              }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1.33,
            backgroundColor: '#000000',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 30,
              width: 65,
              height: 65,
            }}
            onPress={() => handleNumberPress('1')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              marginLeft: 15,
              justifyContent: 'center',
              width: 65,
              height: 65,
            }}
            onPress={() => handleNumberPress('2')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginLeft: 15,
              width: 65,
              height: 65,
            }}
            onPress={() => handleNumberPress('3')}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#EAAA00',
              borderRadius: 32.5,
              marginLeft: 15,
              justifyContent: 'center',
              width: 65,
              height: 65,
            }}
            onPress={() => handleOperationPress('+')}>
            <Text style={{color: '#ffffff', fontSize: 35}}>+</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1.33,
            backgroundColor: '#000000',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#282c35',
              borderRadius: 35,

              marginRight: 20,
              marginLeft: 30,
              width: 140,
              height: 60,
            }}
            onPress={() => handleNumberPress('0')}>
            <Text
              style={{
                fontSize: 35,
                color: '#ffffff',
                textAlign: 'left',
                paddingLeft: 20,
                paddingTop: 5,
              }}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#282c35',
              borderRadius: 32.5,
              justifyContent: 'center',
              marginRight: 15,
              width: 65,
              height: 65,
            }}
            onPress={() => handleNumberPress('.')}>
            <Text style={{color: '#ffffff', fontSize: 35, textAlign: 'center'}}>
              .
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#EAAA00',
              borderRadius: 32.5,
              marginRight: 15,
              justifyContent: 'center',
              width: 65,
              height: 65,
            }}
            onPress={() => getResult('=')}>
            <Text style={{color: '#ffffff', fontSize: 35, textAlign: 'center'}}>
              =
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
