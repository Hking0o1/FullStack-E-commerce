async function userLogout(req, res) { // Swapped parameters
    try {
        res.clearCookie("token")
        res.json({
            success: true,
            data: [],
            error: false,
            message: "User logged out successfully"
        });
    } catch (e) {
        console.error(e);
        res.status(401).json({ // Change status to 401 for unauthorized
            success: false,
            data: null,
            error: true,
            message: e.message || "Unauthorized"
        });

    }

}

module.exports = userLogout;