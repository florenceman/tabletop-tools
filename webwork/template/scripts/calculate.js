var calculate_result = function(){
	var total_amount_of_sample = 1000041,
	sample_letters = {
	a:84966,
	b:20720,
	c:45388,
	d:33844,
	e:18121,
	f:111607,
	g:24705,
	h:30034,
	i:75488,
	j:1965,
	k:11016,
	l:54893,
	m:30129,
	n:66544,
	o:71635,
	p:31671,
	q:1962,
	r:75809,
	s:57351,
	t:69509,
	u:36308,
	v:10074,
	w:12899,
	x:2902,
	y:17779,
	z:2722
},
	list_size = $('#in_1').val();
	word_to_input = $('#in_2').val();
	return list_size+','+word_to_input;
};
