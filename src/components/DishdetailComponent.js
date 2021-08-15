import React, { Component } from 'react';
import '../App.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component {



    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <div className="row">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish == null) {
            return (<div></div>)
        }
        const comentarios = dish.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <div className="col-12 col-md-5 m-1">
                        <div className="row">
                            <h4>{comment.comment}</h4>
                            <p>-- {comment.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h3> Comments </h3>
                <ul className='list-unstyled'>
                    {comentarios}
                </ul>

            </div>
        )
    }
    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}
            </div>
        );
    }
}
export default DishDetail;