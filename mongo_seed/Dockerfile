FROM mongo
COPY catalog.json /catalog.json
CMD mongoimport --host mongo --db catalog --collection products --type json --file /catalog.json --jsonArray