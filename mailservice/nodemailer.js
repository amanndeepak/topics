const nodemailer = require("nodemailer");
const cron = require("node-cron");

const save = (params) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "devonwarth@gmail.com",
      pass: "Devon@123",
    },
  });
 

  var mailOptions = {
    to: "devon@yopmail.com",
    from: "helloaman@gmail.com",
    subject: "this is test mail for client code",
    text: "welcome to my emails",
    html: `
        <table>
        <tr>
        <th>First Name</th>
        <th>Middle Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Enrollment</th>
        </tr>
        <tr>
        <td>${params.first_name}</td>
        <td>${params.second_name}</td>
        <td>${params.last_name}</td>
        <td>${params.email}</td>
        <td>${params.enrollment}</td>
        </tr>
        </table>
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  save,
};
