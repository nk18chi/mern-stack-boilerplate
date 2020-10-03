export DBTABLE="mern-stack-test-db"
mongoimport --host mongodb --port 27017 --db $DBTABLE --collection Users --drop --jsonArray  --file mongo/users.json;