#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <String.h>

typeof struct Heap {
	int *data;//数据域
	int n, size;//n长度，size大小
} Heap;

Heap *init(int);
void clear(Heap *);
void push(Heap *, int);
void pop(Heap *);
void output(Heap *);

//初始化
Heap *init(int n) {
	Heap *p = (Heap *)malloc(sizeof(Heap));
	p->data = (int *)malloc(sizeof(int) * n);
	memset(p->data, 0, sizeof(int) * n);
	p->size = n;
	p->n = 0;
	return p;
}
void clear(Heap *h) {
	if (h == NULL) return ;
	free(h->data);
	free(h);
	return ;
}
void push(Heap *h, int value) {
	if (h->n == h->size) return ;//存满
	h->n += 1;
	h->data[h->n] = value;
	int i = h->n;
	//向上调整的操作
	while (i > 1) {
		//[i/2]比i >> 1慢，但是i/2 = i>>1
		if (h->data[i] <= h->data[i >> 1]) break;//满足子节点小于父节点，不用调整位置
		//调整位置
		h->data[i] ^= h->data[i >> 1];
		h->data[i >> 1] ^= h->data[i];
		h->data[i] ^= h->data[i >> 1];
		i >>= 1;
	}
	return ;
}
void pop(Heap *h) {
	if (h->n <= 1) {
		h->n = 0;
		return ;
	}
	h->data[1] ^= h->data[h->n];
	h->data[h->n] ^= h->data[1];
	h->data[1] ^= h->data[h->n];
	h->n -= 1;
	int ind = 1;//有可能违法堆性质的元素
	while (ind * 2 <= h->n) {
		int swap_ind = -1;
		if (h->data[ind * 2] > h->data[swap_ind]) swap_ind = ind * 2;
		//*2+1 == <<1|1
		if (ind * 2 + 1 <= h->n && h->data[ind * 2 + 1] > h->data[swap_ind]) swap_ind = ind * 2 + 1;
		if (swap_ind == ind) break;
		//交换两个数字
		h->data[ind] ^= h->data[swap_ind];
		h->data[swap_ind] ^= h->data[ind];
		h->data[ind] ^= h->data[swap_ind];

		ind = swap_ind;
	}
	
}

void output(Heap *h) {
	printf("heap=[");
	for (int i = 0; i < h->size; i++) {
		printf("%d, ", h->data[i]);
	}
	printf("]\n");
	return ;
}


int main() {
	srand(time(0));
	Heap *p = init(21);
	for (int i = 0; i < 20; i++) {
		int value = rand() % 100;
		printf("insert %d to heap\n",value);
		push(p, value);
		output(p);
	}
	for(int i = 0; i < 20; i++) {
		pop(p);
		output(p);
	}
	


	clear(p);

	return 0;
}
