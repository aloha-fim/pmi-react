db.createUser(
    {
        user:"frederecim",
        pwd:"kell2427",
        roles: [
            {
                role: "readWrite",
                db:"SimilarityDB"
            }
        ]
    }
)