CREATE TABLE TRANSACTION(
   ID             SERIAL PRIMARY KEY,
   TYPE           TEXT    NOT NULL,
   AMOUNT         MONEY,
   DATE           TIMESTAMP WITHOUT TIME ZONE DEFAULT (now() at time zone 'utc'),
   CATEGORY       VARCHAR(50),
   NOTE           VARCHAR(255)
);
