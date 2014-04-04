echo '//bootall' > bootall.js
for f in jquery.min.js jquery.jqTOC.js prettify.js boot.js
do
	echo "//$f begin" >> bootall.js
	cat $f >> bootall.js
	echo '' >> bootall.js
	echo "//$f end" >> bootall.js
done

