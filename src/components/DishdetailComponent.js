import React from 'react';
import '../App.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';




function RenderDish(dish) {
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

function RenderComments({ dish }) {
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
                            }).format(new Date(Date.parse(comment.date)))}
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
const DishDetail = (props) => {

    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish dish={(props.dish)} />
                <RenderComments comments={(props.dish)} />
            </div>
        </div>
    );
}

export default DishDetail;