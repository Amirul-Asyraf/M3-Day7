import React from 'react';
import { connect } from 'react-redux';
import {addSubmit, addTodo, reduceSubmit, removeTodo} from '../../actions';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log("count data ....", this.props.countData);
    // }

    componentDidUpdate(prevProps) {
        const {todoData} = this.props;

        //check if previous todoData.isLoading == false && todoData.isLoading == true after update
        if(prevProps.todoData.isLoading && !todoData.isLoading) {
            console.log("DATA IS UPDATED");
            // alert('Success');
        } 
    }

    addCount() {
        this.props.addSubmit(1);
    }

    addTodo() {
        const inputVal = this._inputEle.value;
        if(inputVal !== '') {
            const data = {
                task: inputVal,
                key: Date.now(),
            }
            this.props.addTodo(data);
            
            this._inputEle.value = '';
        }
    }

    removeTodo(key) {
        this.props.removeTodo(key);
    }

    render() {
        return (
            <div style={styles.main}>
                <h1>This is Home</h1>
                <h1>Count: {this.props.countData}</h1>

                <div>
                    <button onClick={() => this.props.reduceSubmit()}>Reduce</button>
                    <button onClick={() => this.addCount()}>Add</button>
                </div>

                <div>
                    <input 
                        type='text'
                        placeholder='Enter Task'
                        ref={(ele) => (this._inputEle = ele)}
                    />
                    {
                        this.props.todoData.isLoading ? (<p>LOADING...</p>) : (
                            <button onClick={() => this.addTodo()}>Submit</button>
                    )}

                    <ul>
                        {this.props.todoData.data.map((list) => (
                            <div>
                                {
                                    this.props.removeData.isLoading ? (<p>DELETING...</p>) : (
                                    <div>    
                                        <li>
                                            {list.task};
                                        </li>
                                        <button onClick={() => this.removeTodo(list.key)}>Delete</button>
                                    </div>    
                                )}
                            </div>
                        )) }
                    </ul>
                </div>
            </div>
        );
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

};

const mapStateToProps = (state) => ({
    countData: state.count,
    todoData: state.todo,
    removeData: state.remove,
});

const mapDispatchToProps = {
    addSubmit: addSubmit, 
    reduceSubmit: reduceSubmit,
    addTodo: addTodo,
    removeTodo: removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);