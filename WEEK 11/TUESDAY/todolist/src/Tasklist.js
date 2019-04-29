import React,{Component} from 'react';

export class Tasklist extends Component
{
    render()
    {   
        // let pendingItems = this.props.pendingItems
        // let displayPending = pendingItems.map((task, index) =>
        // {
        //     return <div>
        //            <li key={index}>{task}<button onClick={this.props.markComplete}>Mark as Completed</button></li>
        //            </div>
        // })

        // let completedItems = this.props.completedItems
        // let displayCompleted = completedItems.map((task, index) =>
        // {
        //     return <div>
        //            <li key={index}>{task}</li>
        //            <button onClick={this.props.markPending}>Mark as Pending</button>
        //            </div>
        // })

        // return (<div>
        //         <h4>Pending Items</h4>
        //         <ul>{displayPending}</ul>
        //         <h4>Completed Items</h4>
        //         <ul>{displayCompleted}</ul>
        //         </div>)
        let name = this.props.name
        return (<div>
                    <p>{name}</p>
                </div>)
    }
}