String.prototype.score=function(a,b){var c=0,d=a.length,e=this,f=e.length,g,h,i=1,j;if(e==a)return 1;for(var k=0,l,m,n,o,p,q;k<d;++k){n=a[k],o=e.indexOf(n.toLowerCase()),p=e.indexOf(n.toUpperCase()),q=Math.min(o,p),m=q>-1?q:Math.max(o,p);if(m===-1){if(b){i+=1-b;break}return 0}l=.1,e[m]===n&&(l+=.1),m===0&&(l+=.6,k===0&&(g=1)),e.charAt(m-1)===" "&&(l+=.8),e=e.substring(m+1,f),c+=l}h=c/d,j=(h*(d/f)+h)/2,j=j/i,g&&j+.15<1&&(j+=.15);return j}