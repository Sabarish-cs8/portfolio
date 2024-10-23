import React from "react";

const About = () => {
  return (
    <div>
      <p>
        I am Sabarish, and I am currently graduating with a B.Tech in
        Information Technology from Sri Ramakrishna Institute of Technology in
        Coimbatore, with a CGPA of 7.45. I completed my higher studies at TNGR
        School in Coimbatore.
      </p>
      <form className="biodata">
        <table>
          <thead>
            <tr>
              <th>Details</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DOB</td>
              <td>28/04/2001</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>+91 9095957717</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>sabarish.cs8@gmail.com</td>
            </tr>
            <tr>
              <td>Father's Name</td>
              <td>Selvakumar C</td>
            </tr>
            <tr>
              <td>Mother's Name</td>
              <td>Jayalakshmi S</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default About;
