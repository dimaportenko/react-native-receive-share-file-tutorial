import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ShareFile, useGetShare} from './src/useGetShare';

const App = () => {
  const files = useGetShare();

  const renderFile = (file: ShareFile, index: number) => {
    return Object.keys(file).map((key: string, i: number) => {
      // @ts-ignore
      if (file[key]) {
        return (
          <Text key={`file${index}field${i}`}>
            {/* @ts-ignore*/}
            <Text style={{fontWeight: 'bold'}}>{key}</Text>: {file[key]}
          </Text>
        );
      }
      return null;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {files ? (
        <>
          {files?.map((file, index) => (
            <View key={`file${index}`} style={styles.file}>
              <Text style={styles.fileTitle}>File {index + 1}</Text>
              {renderFile(file, index)}
            </View>
          ))}
        </>
      ) : (
        <Text style={{color: 'black'}}>No files</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignSelf: 'center', justifyContent: 'center'},
  image: {width: 200, height: 200},
  file: {
    padding: 20,
    borderWidth: 1,
  },
  fileTitle: {fontWeight: 'bold', backgroundColor: 'rgba(150, 150, 150, 0.3)'},
});

export default App;
