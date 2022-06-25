CREATE TABLE movie(
    movie_id int primary key auto_increment,
    movie_title varchar(100),
    movie_release_date date,
    movie_time time,
    director_name varchar(100)
);