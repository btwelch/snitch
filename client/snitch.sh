name=barrysdev;
group=0;
order=100;

host=localhost;
port=3003;

cd /opt/rest-api;
restapi_branch=$(git branch | awk '/\*/ { print $2; }');
cd /opt/bravestorm;
bravestorm_branch=$(git branch | awk '/\*/ { print $2; }');
curl --data "name=$name&group=$group&order=$order&restapi_branch=$restapi_branch&bravestorm_branch=$bravestorm_branch" $host:$port/servers/snitch
