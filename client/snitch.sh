name=barrysdev;
host=alphant1.boldchat.com;
port=3003;

cd /opt/rest-api;
restapi_branch=$(git branch | awk '/\*/ { print $2; }');
cd /opt/bravestorm;
bravestorm_branch=$(git branch | awk '/\*/ { print $2; }');
curl --data "name=$name&restapi_branch=$restapi_branch&bravestorm_branch=$bravestorm_branch" $host:$port/servers/snitch
