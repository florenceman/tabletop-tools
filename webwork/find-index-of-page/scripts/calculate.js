var calculate_result = function(v1,v2){
	var total_amount_of_sample = 1000041,
	alphabet = 'abcdefghijklmnopqrstuvwxyz',
	sample_letters = [84966,
	20720,
	45388,
	33844,
	18121,
	111607,
	24705,
	30034,
	75488,
	1965,
	11016,
	54893,
	30129,
	66544,
	71635,
	31671,
	1962,
	75809,
	57351,
	69509,
	36308,
	10074,
	12899,
	2902,
	17779,
	2722
],

	total_so_far = [],
	list_size = v1,
	word_to_input = v2,
	index_count = 1,
	x = 0,
	y = 0,
	z = 0,
	dest = alphabet.indexOf(v2[0]),
	o1 = '';

	var number_scale = parseInt(total_amount_of_sample / v1);
	if (total_amount_of_sample % v1){number_scale++;}
	var scaled_letters = [];

	for (var w in sample_letters){
		z = sample_letters[w]
		x = parseInt(z / number_scale);
		//return x;
		y = z % number_scale;
		if (y){x++;}
		if (x==0){x=1;}
		scaled_letters.push(x);
	}
	//return scaled_letters.join();
	for (var w in scaled_letters){
		z = scaled_letters[w];
		if (dest == z){break}
		total_so_far.push(index_count);
		index_count += z;
	}
	x = index_count;
	
	return x;
};
