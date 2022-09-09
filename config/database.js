module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "postgres://ntlgldhciwcgvc:f314444384b8d2ac8338570f1c72a26f41921841582218183e04f0c23ff462ff@ec2-44-207-253-50.compute-1.amazonaws.com:5432/df07insph786lt"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "data-curso"),
      user: env("DATABASE_USERNAME", "ntlgldhciwcgvc"),
      password: env(
        "DATABASE_PASSWORD",
        "f314444384b8d2ac8338570f1c72a26f41921841582218183e04f0c23ff462ff"
      ),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
