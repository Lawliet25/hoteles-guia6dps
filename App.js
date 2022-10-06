import React,{useState} from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';

const App=()=>{
  const [modalVisibleplaya, setModalVisiblePlaya]=useState(false);
  const [modalVisibledoble, setModalVisibleDoble]=useState(false);

  const [modalVisibleseguridad, setModalVisibleSeguridad]=useState(false);
  const [modalVisiblepiscina, setModalVisiblePiscina]=useState(false);

  const [modalVisibleantro, setModalVisibleAntro]=useState(false);
  const [modalVisiblearte, setModalVisibleArte]=useState(false);

  return(
    <>
    <ScrollView>
    
    <Modal transparent={true} animationType='slide' visible={modalVisibleplaya} onRequestClose={()=>{alert('El modal ha sido cerrado.');}}>
      <View style={styles.vistaModal}>
      <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Habitación individual</Text>
      <Text style={styles}>Habitación individual con una cama y espacio ideal para una persona.</Text>
      <Button title='Cerrar' onPress={()=>{setModalVisiblePlaya(!modalVisibleplaya)}}/>
      </View>
      </View>
    </Modal>

    <Modal transparent={true} animationType='slide' visible={modalVisibledoble} onRequestClose={()=>{alert('El modal ha sido cerrado.');}}>
      <View style={styles.vistaModal}>
      <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Habitación doble</Text>
      <Text style={styles}>Habitación doble con dos camas y espacio ideal para una persona 2 personas.</Text>
      <Button title='Cerrar' onPress={()=>{setModalVisibleDoble(!modalVisibledoble)}}/>
      </View>
      </View>
    </Modal>

     <Modal transparent={true} animationType='slide' visible={modalVisibleseguridad} onRequestClose={()=>{alert('El modal ha sido cerrado.');}}>
      <View style={styles.vistaModal}>
      <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Seguridad y privacidad</Text>
      <Text style={styles}>Cada habitación cuenta con su tarjeta de acceso, brindando mayor privacidad y seguridad.</Text>
      <Button title='Cerrar' onPress={()=>{setModalVisibleSeguridad(!modalVisibleseguridad)}}/>
      </View>
      </View>
    </Modal>

    <Modal transparent={true} animationType='slide' visible={modalVisiblepiscina} onRequestClose={()=>{alert('El modal ha sido cerrado.');}}>
      <View style={styles.vistaModal}>
      <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Amplia piscina</Text>
      <Text style={styles}>Contamos con una piscina de gran tamaño y aseo de calidad.</Text>
      <Button title='Cerrar' onPress={()=>{setModalVisiblePiscina(!modalVisiblepiscina)}}/>
      </View>
      </View>
    </Modal>

    <Modal transparent={true} animationType='slide' visible={modalVisibleantro} onRequestClose={()=>{alert('El modal ha sido cerrado.');}}>
      <View style={styles.vistaModal}>
      <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Museo de antropología</Text>
      <Text style={styles}>El Museo Nacional de Antropología Dr. David J. 
      Guzmán está localizado en Avenida La Revolución, Colonia San Benito, San Salvador, El Salvador.</Text>
      <Button title='Cerrar' onPress={()=>{setModalVisibleAntro(!modalVisibleantro)}}/>
      </View>
      </View>
    </Modal>

    <Modal transparent={true} animationType='slide' visible={modalVisiblearte} onRequestClose={()=>{alert('El modal ha sido cerrado.');}}>
      <View style={styles.vistaModal}>
      <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Museo de arte</Text>
      <Text style={styles}>Localizado en la ciudad de San Salvador, 
      es una institución sin institución privada sin fines de lucro cuyo funcionamiento 
      es responsabilidad de la Asociación Museo de Arte de El Salvador.</Text>
      <Button title='Cerrar' onPress={()=>{setModalVisibleArte(!modalVisiblearte)}}/>
      </View>
      </View>
    </Modal>

    <View style={{flexDirection:'row'}}>
    <Image style ={styles.banner} 
    source={require('./src/img/banner.jpg')}/>
    </View>

    <View style={styles.back}>
    <Text style={styles.morri}>HOTEL MORRISON</Text>
    
    <View style={styles.contenedor}>
    <Text style={styles.titulo}>Tipos de habitaciones</Text>
    <ScrollView horizontal>
    <View>
    <TouchableHighlight onPress={()=>{
      setModalVisiblePlaya(!modalVisibleplaya)
    }}>
  
    <Image 
      style={styles.ciudad}
      source={require('./src/img/individual.jpg')}    
    />
    </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight onPress={()=>{
      setModalVisibleDoble(!modalVisibledoble)
    }}>
    <Image 
      style={styles.ciudad}
      source={require('./src/img/doble.jpg')}    
    />
    </TouchableHighlight>
    </View>
    <View>
    <Image 
      style={styles.ciudad}
      source={require('./src/img/familiar.jpg')}    
    />
    </View>
    <View>
    <Image 
      style={styles.ciudad}
      source={require('./src/img/suite.jpg')}    
    />
    </View>
    </ScrollView>
    </View>

    <Text style={styles.titulo}>Servicios</Text>
    <View>
      <View>
      <TouchableHighlight onPress={()=>{
      setModalVisibleSeguridad(!modalVisibleseguridad)
    }}>
      <Image 
      style={styles.mejores}
      source={require('./src/img/seguridad.jpg')}    
      />
       </TouchableHighlight>
      </View>
      <View>
      <TouchableHighlight onPress={()=>{
      setModalVisiblePiscina(!modalVisiblepiscina)
      }}>
      <Image 
      style={styles.mejores}
      source={require('./src/img/piscina.jpg')}    
      />
       </TouchableHighlight>
      </View>
      <View>
      
      <Image 
      style={styles.mejores}
      source={require('./src/img/restuarante.jpg')}    
      />
      </View>
      <View>
      <Image 
      style={styles.mejores}
      source={require('./src/img/limpieza.jpg')}    
      />
      </View>
    </View>

    <Text style={styles.titulo}>Lugares cercanos de interés</Text>
    <View style={styles.listado}>
      <View style={styles.listaItem}>
      <TouchableHighlight onPress={()=>{
      setModalVisibleAntro(!modalVisibleantro)
      }}>
      <Image 
      style={styles.mejores}
      source={require('./src/img/museo.jpg')}    
      />
      </TouchableHighlight>
      </View>
      <View style={styles.listaItem}>
      <Image 
      style={styles.mejores}
      source={require('./src/img/bowling.jpg')}    
      />
      </View>
      <View style={styles.listaItem}>
      <Image 
      style={styles.mejores}
      source={require('./src/img/paseo.jpg')}    
      />
      </View>
      <View style={styles.listaItem}>
      <TouchableHighlight onPress={()=>{
      setModalVisibleArte(!modalVisiblearte)
      }}>
      <Image 
      style={styles.mejores}
      source={require('./src/img/arte.jpg')}    
      />
      </TouchableHighlight>
      </View>
      
    </View>
    </View>
</ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  back:{
    backgroundColor:'#B9BABA'
  },
  banner: {
    height:250,
    flex: 1,
    flexDirection:'row'},

   morri:{
    fontWeight:'bold',
    fontSize:24,
    color:'#960000',
    textAlign: 'center',
    marginVertical:10,
  },

  titulo:{
    fontWeight:'bold',
    fontSize:24,
    textAlign: 'center',
    marginVertical:10,
  },
  contenedor:{
    marginHorizontal:10,
    
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5,
  },
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
  },
  vistaModal:{
    backgroundColor:'#000000aa',
    flex:1,
  },
  Modal:{
    backgroundColor:'#fff',
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1,
  },
 
  subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center'
  }
});

export default App;
