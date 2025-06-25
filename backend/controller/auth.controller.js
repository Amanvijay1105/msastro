import passport from "passport";

export const googleLogin = passport.authenticate("google", {
    scope: ["profile", "email"],
});

export const googleCallback = [
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/"); // ⬅️ redirecting to homepage after login
    },
];

export const logout = (req, res) => {
    req.logout(err => {
        if (err) return res.status(500).send("Logout failed");
        res.redirect("/");
    });
};
