const db = require("../config/db");

exports.enrollCourse = (req, res) => {
    const { name, email, phone, course } = req.body;

    if (!name || !email || !phone || !course) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = "INSERT INTO enrollments (name, email, phone, course) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, phone, course], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        res.status(201).json({ message: "Enrollment successful" });
    });
};
