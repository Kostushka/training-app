import React from 'react';
import styles from './App.module.css';

class ClassApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    decrement() {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.count}>{this.state.count}</h1>
                <button className={styles.btn} onClick={this.increment}>
                    Увеличить
                </button>
                <button className={styles.btn} onClick={this.decrement}>
                    Уменьшить
                </button>
            </div>
        );
    }
}

export default ClassApp;
