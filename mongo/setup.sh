export DBTABLE="mern-stack-test-db"
mongoimport --legacy --host mongodb --port 27017 --db $DBTABLE --collection Users --drop --jsonArray  --file mongo/users.json;
mongoimport --legacy --host mongodb --port 27017 --db $DBTABLE --collection Belongings --drop --jsonArray  --file mongo/belongings.json;