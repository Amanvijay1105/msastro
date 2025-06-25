import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";

const configurePassport = (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/auth/google/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                const newUser = {
                    googleId: profile.id,
                    email: profile.emails?.[0]?.value || "",
                    name: profile.displayName,
                    avatar: profile.photos?.[0]?.value || "",
                };

                try {
                    let user = await User.findOne({ googleId: profile.id });

                    if (user) {
                        return done(null, user);
                    } else {
                        const createdUser = await User.create(newUser);
                        return done(null, createdUser);
                    }
                } catch (err) {
                    return done(err, null);
                }
            }
        )
    );

    // Serialize user into session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Deserialize user from session
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
};

export default configurePassport;
