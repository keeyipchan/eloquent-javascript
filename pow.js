function pow(n, m) {
	var res = 1;
	var count = 0;
	while(count < m) {
		res = res * n;
		count++;
	}
	return res;
}
print(pow(2, 0));
print(pow(2, 1));
print(pow(2, 2));
print(pow(2, 3));
print(pow(2, 4));
print(pow(2, 5));
print(pow(2, 6));
print(pow(2, 7));
