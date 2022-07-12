import React from "react";

import studentPicture from '../assets/student.jpg'
import classPicture from '../assets/class.jpg'

function Home() {
    return (
        <div class="container">
            <div class="row justify-content-evenly gap-5 p-5">
                <div class="card col">
                    <div class="card-body">
                        <img src={studentPicture} class="card-img-top card-img" />
                        <h5 class="card-title">Student Manager</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="student-manager" class="btn btn-light">Go to Student Manager</a>
                    </div>
                </div>

                <div class="card col">
                    <div class="card-body">
                        <img src={classPicture} class="card-img-top card-img" />
                        <h5 class="card-title">Class Manager</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="class-manager" class="btn btn-light">Go to Class Manager</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;