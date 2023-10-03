import React, {useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Button from '../components/button/button.view';
import StyledText from '../components/styledText/styledText.view';
import Separator from '../components/separator/separator.view';

import {
  removeTask,
  markTaskAsDone,
  addTask,
} from '../store/slices/items/itemsSlice';
import {getListOfTasks} from '../store/slices/items/itemsSelector';
import Input from '../components/input/input.view';

const Home = () => {
  const [newTask, setNewTask] = useState('');
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const tasks = useSelector(getListOfTasks);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <FlatList
              data={tasks}
              renderItem={({item}) => (
                <View key={item.id}>
                  <View style={styles.taskContainer}>
                    <View style={styles.taskWrapper}>
                      <Button
                        style={styles.buttonTask}
                        selected={item.done}
                        type={Button.type.radial}
                        onPress={() =>
                          item.done
                            ? undefined
                            : dispatch(markTaskAsDone(item.id))
                        }
                      />
                      <StyledText>{item.name}</StyledText>
                    </View>
                    <Button
                      type={Button.type.underline}
                      text={'Remove item'}
                      onPress={() => dispatch(removeTask(item.id))}
                    />
                  </View>
                </View>
              )}
              contentContainerStyle={{
                minHeight: 450,
              }}
              ItemSeparatorComponent={<Separator />}
              ListHeaderComponent={
                <View style={styles.headerContainer}>
                  <StyledText type={StyledText.type.header}>
                    Your Task
                  </StyledText>
                </View>
              }
            />
            <View style={styles.footer}>
              <View style={styles.headerContainer}>
                <StyledText type={StyledText.type.header}>
                  Add New Task
                </StyledText>
              </View>
              <View style={styles.inputContainer}>
                <StyledText type={StyledText.type.label}>
                  Name<StyledText style={{color: 'red'}}>*</StyledText>
                </StyledText>
                <Input
                  style={styles.input}
                  placeholder={'New name'}
                  onChangeText={setNewTask}
                  ref={inputRef}
                />
              </View>
              <Button
                text={'Add'}
                onPress={() => {
                  dispatch(addTask(newTask));
                  inputRef.current.clear();
                  setNewTask('');
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    margin: 16,
  },
  headerContainer: {
    backgroundColor: '#D9EFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  taskWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 8,
  },
  buttonTask: {
    marginRight: 8,
  },
  footer: {
    marginTop: 16,
  },
  inputContainer: {
    marginTop: 8,
    marginBottom: 32,
  },
  input: {
    marginTop: 8,
  },
});

export default Home;
