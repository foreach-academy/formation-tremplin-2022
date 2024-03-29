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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: actions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actions (
    action_id integer NOT NULL,
    action character varying(20) NOT NULL
);


ALTER TABLE public.actions OWNER TO postgres;

--
-- Name: actions_action_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.actions_action_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.actions_action_id_seq OWNER TO postgres;

--
-- Name: actions_action_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.actions_action_id_seq OWNED BY public.actions.action_id;


--
-- Name: character_actions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.character_actions (
    character_id integer NOT NULL,
    action_id integer NOT NULL
);


ALTER TABLE public.character_actions OWNER TO postgres;

--
-- Name: characters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.characters (
    character_id integer NOT NULL,
    name character varying(30) NOT NULL,
    homeland character varying(60) NOT NULL,
    favorite_color character varying(30)
);


ALTER TABLE public.characters OWNER TO postgres;

--
-- Name: characters_character_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.characters_character_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.characters_character_id_seq OWNER TO postgres;

--
-- Name: characters_character_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.characters_character_id_seq OWNED BY public.characters.character_id;


--
-- Name: more_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.more_info (
    more_info_id integer NOT NULL,
    birthday date,
    height_in_cm integer,
    weight_in_kg numeric(4,1),
    character_id integer NOT NULL
);


ALTER TABLE public.more_info OWNER TO postgres;

--
-- Name: more_info_more_info_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.more_info_more_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.more_info_more_info_id_seq OWNER TO postgres;

--
-- Name: more_info_more_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.more_info_more_info_id_seq OWNED BY public.more_info.more_info_id;


--
-- Name: sounds; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sounds (
    sound_id integer NOT NULL,
    filename character varying(40) NOT NULL,
    character_id integer NOT NULL
);


ALTER TABLE public.sounds OWNER TO postgres;

--
-- Name: sounds_sound_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sounds_sound_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sounds_sound_id_seq OWNER TO postgres;

--
-- Name: sounds_sound_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sounds_sound_id_seq OWNED BY public.sounds.sound_id;


--
-- Name: actions action_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions ALTER COLUMN action_id SET DEFAULT nextval('public.actions_action_id_seq'::regclass);


--
-- Name: characters character_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.characters ALTER COLUMN character_id SET DEFAULT nextval('public.characters_character_id_seq'::regclass);


--
-- Name: more_info more_info_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.more_info ALTER COLUMN more_info_id SET DEFAULT nextval('public.more_info_more_info_id_seq'::regclass);


--
-- Name: sounds sound_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sounds ALTER COLUMN sound_id SET DEFAULT nextval('public.sounds_sound_id_seq'::regclass);


--
-- Data for Name: actions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actions (action_id, action) FROM stdin;
1	courir
2	sauter
3	se baisser
\.


--
-- Data for Name: character_actions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.character_actions (character_id, action_id) FROM stdin;
7	1
7	2
7	3
3	1
3	2
3	3
5	1
5	2
5	3
2	1
2	2
2	3
4	1
4	2
4	3
1	1
1	2
1	3
6	1
6	2
6	3
\.


--
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.characters (character_id, name, homeland, favorite_color) FROM stdin;
1	Mario	Royaume Champignon	Rouge
2	Luigi	Royaume Champignon	Vert
3	Peach	Royaume Champignon	Rose
7	Yoshi	L'Œle Yoshi	Vert
6	Daisy	Royaume Champignon	Orange
4	Toad	Royaume Champignon	Bleu
5	Bowser	Royaume Koopa	Jaune
\.


--
-- Data for Name: more_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.more_info (more_info_id, birthday, height_in_cm, weight_in_kg, character_id) FROM stdin;
1	1981-07-09	155	64.5	1
6	1983-07-14	175	48.8	2
7	1985-10-18	173	52.2	3
8	1990-10-29	66	35.6	4
9	1989-07-31	\N	\N	6
10	1990-04-13	162	59.1	7
11	1990-10-29	258	300.0	5
\.


--
-- Data for Name: sounds; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sounds (sound_id, filename, character_id) FROM stdin;
9	its-a-me.wav	1
10	yippee.wav	1
11	ha-ha.wav	2
12	oh-yeah.wav	2
13	yay.wav	3
14	woo-hoo.wav	3
15	mm-hmm.wav	3
16	yahoo.wav	1
\.


--
-- Name: actions_action_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.actions_action_id_seq', 3, true);


--
-- Name: characters_character_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.characters_character_id_seq', 7, true);


--
-- Name: more_info_more_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.more_info_more_info_id_seq', 11, true);


--
-- Name: sounds_sound_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sounds_sound_id_seq', 16, true);


--
-- Name: actions actions_action_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_action_key UNIQUE (action);


--
-- Name: actions actions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_pkey PRIMARY KEY (action_id);


--
-- Name: character_actions character_actions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.character_actions
    ADD CONSTRAINT character_actions_pkey PRIMARY KEY (character_id, action_id);


--
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (character_id);


--
-- Name: more_info more_info_character_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.more_info
    ADD CONSTRAINT more_info_character_id_key UNIQUE (character_id);


--
-- Name: more_info more_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.more_info
    ADD CONSTRAINT more_info_pkey PRIMARY KEY (more_info_id);


--
-- Name: sounds sounds_filename_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sounds
    ADD CONSTRAINT sounds_filename_key UNIQUE (filename);


--
-- Name: sounds sounds_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sounds
    ADD CONSTRAINT sounds_pkey PRIMARY KEY (sound_id);


--
-- Name: character_actions character_actions_action_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.character_actions
    ADD CONSTRAINT character_actions_action_id_fkey FOREIGN KEY (action_id) REFERENCES public.actions(action_id);


--
-- Name: character_actions character_actions_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.character_actions
    ADD CONSTRAINT character_actions_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(character_id);


--
-- Name: more_info more_info_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.more_info
    ADD CONSTRAINT more_info_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(character_id);


--
-- Name: sounds sounds_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sounds
    ADD CONSTRAINT sounds_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(character_id);


--
-- PostgreSQL database dump complete
--

