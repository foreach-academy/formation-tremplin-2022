--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE students;
--
-- Name: students; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE students WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';


ALTER DATABASE students OWNER TO postgres;

\connect students

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    course_id integer NOT NULL,
    course character varying(50) NOT NULL
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: courses_course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courses_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.courses_course_id_seq OWNER TO postgres;

--
-- Name: courses_course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courses_course_id_seq OWNED BY public.courses.course_id;


--
-- Name: majors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.majors (
    major_id integer NOT NULL,
    major character varying(50) NOT NULL
);


ALTER TABLE public.majors OWNER TO postgres;

--
-- Name: majors_courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.majors_courses (
    major_id integer NOT NULL,
    course_id integer NOT NULL
);


ALTER TABLE public.majors_courses OWNER TO postgres;

--
-- Name: majors_major_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.majors_major_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.majors_major_id_seq OWNER TO postgres;

--
-- Name: majors_major_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.majors_major_id_seq OWNED BY public.majors.major_id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    student_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    major_id integer,
    gpa numeric(2,1)
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: students_students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.students_students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_students_id_seq OWNER TO postgres;

--
-- Name: students_students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.students_students_id_seq OWNED BY public.students.student_id;


--
-- Name: courses course_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses ALTER COLUMN course_id SET DEFAULT nextval('public.courses_course_id_seq'::regclass);


--
-- Name: majors major_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.majors ALTER COLUMN major_id SET DEFAULT nextval('public.majors_major_id_seq'::regclass);


--
-- Name: students student_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN student_id SET DEFAULT nextval('public.students_students_id_seq'::regclass);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses VALUES (17, 'Data Structures and Algorithms');
INSERT INTO public.courses VALUES (18, 'Web Programming');
INSERT INTO public.courses VALUES (19, 'Database Systems');
INSERT INTO public.courses VALUES (20, 'Computer Networks');
INSERT INTO public.courses VALUES (21, 'SQL');
INSERT INTO public.courses VALUES (22, 'Machine Learning');
INSERT INTO public.courses VALUES (23, 'Computer Systems');
INSERT INTO public.courses VALUES (24, 'Web Applications');
INSERT INTO public.courses VALUES (25, 'Artificial Intelligence');
INSERT INTO public.courses VALUES (26, 'Python');
INSERT INTO public.courses VALUES (27, 'Object-Oriented Programming');
INSERT INTO public.courses VALUES (28, 'Calculus');
INSERT INTO public.courses VALUES (29, 'Game Architecture');
INSERT INTO public.courses VALUES (30, 'Algorithms');
INSERT INTO public.courses VALUES (31, 'UNIX');
INSERT INTO public.courses VALUES (32, 'Server Administration');
INSERT INTO public.courses VALUES (33, 'Network Security');


--
-- Data for Name: majors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.majors VALUES (32, 'Database Administration');
INSERT INTO public.majors VALUES (33, 'Web Development');
INSERT INTO public.majors VALUES (34, 'Data Science');
INSERT INTO public.majors VALUES (35, 'Network Engineering');
INSERT INTO public.majors VALUES (36, 'Computer Programming');
INSERT INTO public.majors VALUES (37, 'Game Design');
INSERT INTO public.majors VALUES (38, 'System Administration');


--
-- Data for Name: majors_courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.majors_courses VALUES (32, 17);
INSERT INTO public.majors_courses VALUES (33, 18);
INSERT INTO public.majors_courses VALUES (32, 19);
INSERT INTO public.majors_courses VALUES (34, 17);
INSERT INTO public.majors_courses VALUES (35, 20);
INSERT INTO public.majors_courses VALUES (32, 21);
INSERT INTO public.majors_courses VALUES (34, 22);
INSERT INTO public.majors_courses VALUES (35, 23);
INSERT INTO public.majors_courses VALUES (36, 20);
INSERT INTO public.majors_courses VALUES (32, 24);
INSERT INTO public.majors_courses VALUES (37, 25);
INSERT INTO public.majors_courses VALUES (34, 26);
INSERT INTO public.majors_courses VALUES (36, 27);
INSERT INTO public.majors_courses VALUES (38, 23);
INSERT INTO public.majors_courses VALUES (37, 28);
INSERT INTO public.majors_courses VALUES (33, 17);
INSERT INTO public.majors_courses VALUES (34, 28);
INSERT INTO public.majors_courses VALUES (33, 27);
INSERT INTO public.majors_courses VALUES (37, 29);
INSERT INTO public.majors_courses VALUES (38, 20);
INSERT INTO public.majors_courses VALUES (37, 30);
INSERT INTO public.majors_courses VALUES (38, 31);
INSERT INTO public.majors_courses VALUES (38, 32);
INSERT INTO public.majors_courses VALUES (36, 23);
INSERT INTO public.majors_courses VALUES (36, 26);
INSERT INTO public.majors_courses VALUES (35, 33);
INSERT INTO public.majors_courses VALUES (33, 24);
INSERT INTO public.majors_courses VALUES (35, 30);


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.students VALUES (5, 'Rhea', 'Kellems', 32, 2.5);
INSERT INTO public.students VALUES (6, 'Emma', 'Gilbert', NULL, NULL);
INSERT INTO public.students VALUES (7, 'Kimberly', 'Whitley', 33, 3.8);
INSERT INTO public.students VALUES (8, 'Jimmy', 'Felipe', 32, 3.7);
INSERT INTO public.students VALUES (9, 'Kyle', 'Stimson', NULL, 2.8);
INSERT INTO public.students VALUES (10, 'Casares', 'Hijo', 37, 4.0);
INSERT INTO public.students VALUES (11, 'Noe', 'Savage', NULL, 3.6);
INSERT INTO public.students VALUES (12, 'Sterling', 'Boss', 37, 3.9);
INSERT INTO public.students VALUES (13, 'Brian', 'Davis', NULL, 2.3);
INSERT INTO public.students VALUES (14, 'Kaija', 'Uronen', 37, 3.7);
INSERT INTO public.students VALUES (15, 'Faye', 'Conn', 37, 2.1);
INSERT INTO public.students VALUES (16, 'Efren', 'Reilly', 33, 3.9);
INSERT INTO public.students VALUES (17, 'Danh', 'Nhung', NULL, 2.4);
INSERT INTO public.students VALUES (18, 'Maxine', 'Hagenes', 32, 2.9);
INSERT INTO public.students VALUES (19, 'Larry', 'Saunders', 34, 2.2);
INSERT INTO public.students VALUES (20, 'Karl', 'Kuhar', 33, NULL);
INSERT INTO public.students VALUES (21, 'Lieke', 'Hazenveld', 37, 3.5);
INSERT INTO public.students VALUES (22, 'Obie', 'Hilpert', 33, NULL);
INSERT INTO public.students VALUES (23, 'Peter', 'Booysen', NULL, 2.9);
INSERT INTO public.students VALUES (24, 'Nathan', 'Turner', 32, 3.3);
INSERT INTO public.students VALUES (25, 'Gerald', 'Osiki', 34, 2.2);
INSERT INTO public.students VALUES (26, 'Vanya', 'Hassanah', 37, 4.0);
INSERT INTO public.students VALUES (27, 'Roxelana', 'Florescu', 32, 3.2);
INSERT INTO public.students VALUES (28, 'Helene', 'Parker', 34, 3.4);
INSERT INTO public.students VALUES (29, 'Mariana', 'Russel', 33, 1.8);
INSERT INTO public.students VALUES (30, 'Ajit', 'Dhungel', NULL, 3.0);
INSERT INTO public.students VALUES (31, 'Mehdi', 'Vandenberghe', 32, 1.9);
INSERT INTO public.students VALUES (32, 'Dejon', 'Howell', 33, 4.0);
INSERT INTO public.students VALUES (33, 'Aliya', 'Gulgowski', 38, 2.6);
INSERT INTO public.students VALUES (34, 'Ana', 'Tupajic', 34, 3.1);
INSERT INTO public.students VALUES (35, 'Hugo', 'Duran', NULL, 3.8);


--
-- Name: courses_course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_course_id_seq', 33, true);


--
-- Name: majors_major_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.majors_major_id_seq', 38, true);


--
-- Name: students_students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_students_id_seq', 35, true);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (course_id);


--
-- Name: majors_courses majors_courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.majors_courses
    ADD CONSTRAINT majors_courses_pkey PRIMARY KEY (major_id, course_id);


--
-- Name: majors majors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.majors
    ADD CONSTRAINT majors_pkey PRIMARY KEY (major_id);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);


--
-- Name: majors_courses majors_courses_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.majors_courses
    ADD CONSTRAINT majors_courses_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(course_id);


--
-- Name: majors_courses majors_courses_major_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.majors_courses
    ADD CONSTRAINT majors_courses_major_id_fkey FOREIGN KEY (major_id) REFERENCES public.majors(major_id);


--
-- Name: students students_major_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_major_id_fkey FOREIGN KEY (major_id) REFERENCES public.majors(major_id);


--
-- PostgreSQL database dump complete
--

