var Content = `#include <iostream>
#include <queue> 
#include <vector>
using PII = std::pair<int, int>;
int prim(int x, const  &graph){
std::queue<PII,vector<PII>> Q;
std::vector<bool> m(graph);
int minimum_cost = 0;
Q.push(std::make_pair(0, x));
while (!Q.empty()) {
PII p = Q.top(); Q.pop();
x = p.second;
if (marked[x] == true) { continue;
minimum_cost += p.first;
marked[x] = true;
for (const PII &neighbor 
graph[x]) {
int y = neighbor.second;
if (marked[y] == false) 
{Q.push(neighbor);
return minimum_cost;
int main() { int nodes = 0, 
edges = 0;
std::cin >> nodes >> edges;
if (nodes == 0 || edges == 0) {
return 0;
std::vector<std::vector<PII> >
graph(nodes);
for (int i = 0; i < edges; ++i)
int x = 0, y = 0, weight = 0;
std::cin >> x >> y >> weight;
graph[x].push_back();
std::make_pair(weight, y));
graph[y].push_back()'
std::make_pair(weight, x));
int minimum_cost = prim(1, graph);
std::cout << minimum_cost;
return 0;#include <cassert>
#include <iostream>
#include <vector>
bool hamilton_cycle(const x) {
const size_t n = routes.size();
const size_t height = 1 << n;
for (size_t i = 0; i < n; ++i) {
dp[1 << i][i] = true;
for (size_t i = 1; i < height) {
std::vector<size_t> zeros, ones;
(size_t pos == 0) {
if ((1 << pos) & i) {
ones.push_back(pos);
else zeros.push_back(pos);
for (auto &o : ones) {
if (!dp[i][o]) {
continue;
for (auto &z : zeros) {
if (!routes[o][z]) {
continue; dp[i + (1 << z)][z] = 1;
bool is_cycle = false;
for (size_t i = 0; i < n; i++) {
is_cycle |= dp[height - 1][i];
if (is_cycle) { 
return is_cycle;
static void test1() {
std::vector<std::vector<bool>> arr{
bool ans = hamilton_cycle(arr);
std::cout << "Test 1... ";
assert(ans); std::cout << "passed\n";}
static void test2() {
std::vector<std::vector<bool>> arr{
std::vector<bool>({true}),
std::vector<bool>({false}),
std::vector<bool>({false}),
std::vector<bool>({false})};
bool ans = hamilton_cycle(arr);
std::cout << "Test 2... ";
assert(!ans);  // not a cycle
std::cout << "passed\n";
static void test3() {
std::vector<std::vector<bool>> arr{
std::vector<bool>({true}),
std::vector<bool>({true}),
std::vector<bool>({true}),
std::vector<bool>({true})};
bool ans = hamilton_cycle(arr);
std::cout << "Test 3... ";
assert(ans);
std::cout << "passed\n";
int main(int argc, char **argv) {
test1(); test2(); test3();
return 0;
`;
var newcode = Content.split("\n");
export default newcode;
