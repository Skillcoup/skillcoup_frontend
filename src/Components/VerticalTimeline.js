import React from 'react';
import './VerticalTimeline.css';
const VerticalTimeline = () => {
    return(
        <>
       
<section className="container">
  

  <ul className="timeline-with-icons">
    <li className="timeline-item mb-5">
      <span className="timeline-icon">
        <i className="fas fa-rocket text-primary fa-sm fa-fw"></i>
      </span>

      <h5 className="fw-bold">Post a Job</h5>
      
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        necessitatibus adipisci, ad alias, voluptate pariatur officia
        repellendus repellat inventore fugit perferendis totam dolor
        voluptas et corrupti distinctio maxime corporis optio?
      </p>
    </li>

    <li className="timeline-item mb-5">

      <span className="timeline-icon">
        <i className="fas fa-hand-holding-usd text-primary fa-sm fa-fw"></i>
      </span>
      <h5 className="fw-bold">Hire A Right Person</h5>

      <p className="text-muted">
        Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
        aliquet laoreet sapien, eget pulvinar lectus maximus vel.
        Phasellus suscipit porta mattis.
      </p>
    </li>

    <li className="timeline-item mb-5">

      <span className="timeline-icon">
        <i className="fas fa-users text-primary fa-sm fa-fw"></i>
      </span>
      <h5 className="fw-bold">Verify Work</h5>
     
      <p className="text-muted">
        Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
        facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
        convallis. Quisque consectetur purus erat, et ullamcorper sapien
        tincidunt vitae.
      </p>
    </li>

    <li className="timeline-item mb-5">

      <span className="timeline-icon">
        <i className="fas fa-money-bill-wave text-primary fa-sm fa-fw"></i>
      </span>
      <h5 className="fw-bold">Pay For Quality</h5>
     
      <p className="text-muted">
        Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
        et urna sit amet massa dapibus tristique non finibus ligula. Nam
        pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
        vulputate mattis.
      </p>
    </li>
  </ul>
</section>

        </>
    );
}
export default VerticalTimeline;