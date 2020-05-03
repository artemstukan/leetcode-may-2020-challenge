
'use strict'

module.exports = {
    run: function () {
        let ransomNote = 'fejzkavtaxqeqvttndquaamuokgukgmyaieovamgchjlsnsituzqroywlykvqnedbcxpwfpheyerekuqnhcimvjpndbxhrohmlaxmgfsiudfgecqafjvowajmnipzybjuhgecgbaqluolhqndswzttnlhwckdwdjtdyoaskzhqgchlebrjavhtyziisfasprwstfowqgllozuyafkppickwgeyhciyzsrfycoqkfexosjlnxqhvujwssmoqjqofswrgolycjkciuglsyzyzcueqwbmokyhnsbmwonodwbqgdovaxwcyzdvnnldgfurgutjdevhuugqyvbywazyhtqduogosprvanffkzwficmjeihunbbskrtjaefkuriapihawofigbmqdhsfwxpbfnvzfmdsrvgagytagjloxvxuagjdusmztlxvtetufthgzgtjxbqxldyhkuicpxxudpvonjglpctqxplrcvearseyufmcoqythbuntbuhkelpdokrjnvcixhuhemdlisndazpmcnsdhzcjxwayicykrquptukfobwzpcrarzgzmboeprwodbyzeosivvrlhvbhqystxycognpmunvzozhsssneyyccetuidkgjxmercglejvmlmunnoiidtjhhqphzxrsomfsvvmfcigfxrzdzjsomxpqkktlnigojtvivmlvfdvlkdxbnwprjilsehnyjmtctobikssdvjgnyejdifawxufekaakxfwolmhighcqynwmdmciauzesslcdfyrfniyggbewodfhlpvuqtmwqayecojcmwfkrlamsesdaoovpalmeivqxnegcmhxznspmuzubfdkjaxzpwhxaslmivownnbbebqvyyvloerynyltqngcwrljvuboantskjhpbemvilvoavcswdfujxrzhopvkofypximxsrkgallvolqssmrldsccgfhgninxvwhqrktlmxrmzbsqhhhqzfilcbwnamzqxxeueksxvtvvtoxq';
        let magazine = 'zgzvhchqrctqwqbyeitmlekyaiehrqrcxwmqvvaynyzjvfjwfvtwkfwcbxbznptzpmcxvapwhsipsjrqgahmuntcmxuvgvrzjatxxjhfnerhdawgvesutzdznaepvrgdnczlamnwbfpzfrisnausdnjstfzuxiezbhpfhayxremnlaulcmapvltnrjzddhzpwhidqiswyukziuytzhiuhygmqbxtbqafdtwiafmkqxwhidtnsluynytfguiwbmbfatrrudskfjmvcysmpzknkgmkinjienyljzdmxmradwzqewupfucbqinxqsrjpsvfyilhjrgaxlbbkbsnzrhmrtkqynifvfgzgkfjaadkqmnvdkvirmqttftibpnywankqgujlnxyqqxhnxcpmsfvyvghdluciefjiyziiacstiqrauvmvmmlsxnufjxzikuuxpcrhyadqhmwtshjxfbhuekvphyfnenpnpyruthxndwbdxkpcxbuvjdkipwqbdgjfyukygantkvicvcavjmydtitzurlhnhdfqmhzeprhhnqjjwukiyczgmejrayuuudytfxwkhpfmwqlemgkeawltwxvjxdverxlpnawpxscqcbaisrmlnujpifyqecewcmugfyfyexijyadbwysdjaamfjyjwukvwawtgmhqrufadchlejjwffnynhryuvbjtjljdldiixqurfjcjsuupnewqgshnvxwbkrnbivbxfcvalgmerigiuayuftnbpszkijiywgabwjlatfezizanykzruzqnkeaervdbbuewibtauvnngbsfvwsbaibmvpigkewwbnpvsjsmldamyglaspukkxuxxmyrmyxfkfapwwgizubfabfrcwfagxsburucuqfjjghekqxqebpddevcsknbutyjizqthhlvzvurusnsszbbfzbykqkucdaklkiqxbifeayatqfjcahykzaytehiuwqykfyaigyvxzsrujkrpnwvwwflxxblgxpdjclawccyaehtmregfuutaegqughaxrjnbfkqjhtnsvqilxurpknrzmxnqmlhwlnxxavhnyceecubtmwzcljapwkumbpyhpztngrrpcbwdnqgrnnpufuxzixfpmdbcslkfyewsmbgusveitpyzudivcwtygvdeirizgxywakudzbsvlexcjefvdneizhnumyrzrzktfkkrypcifkjvjlzuuhilxpepkraddpeyvgnuqqlafmiqqtgzfrcjygnmzndsiyhidbkfbepitjgmwaygscyhgbcfcmhtwqbxgmugphfvrbskqwzbihbtazndgpiusmgzxyzwtsxrfdesjqvwbskckzrbgimridmhdeakngemxevqifpjvuxthtxvwuiihikqygbryzmbxhzyvcdblhzrjppjpiarycvvyavfpgvulidsnsbvknvylxfawkcuypnxfjfrsukanwiwspinpbjdbgmkpqbkybadmdzhcaybkfxglyamxvgkcrqcyfnlrvivigpjmgymlrmvaapunpelukmdzynigchlcfrmebysdlmzwistgatmwgxrxwsxpwgytqlbgwxnrxcxwmifeenjzflwkkjnwjwagivcsfknuzceenmkudabhuwdpjycxgrqruyghxyxhkwggbemtbjakvdxdlsylddhtivcsyxbrvvexvyvmcztbjbznmpkmanebqcrdfmiyesqutnqyebcidskhulmanrcwnmdwjzllejaktknnudiluvsehyjmaescpxscsrehbbvieinhwrxjymntluassumgzykdskkyazrhrjmnwhxezvjbveurskjpljsrgjixxwisphbjzpbfemrasrjcnlsuxffcsrjnppipvnqcnghqlatwxhwpmxehucyjutpszwibpgylxlqsvzfqnmxwmcrpdyyvfgjqaiiyh';
    
        var canConstruct = function(ransomNote, magazine) {
        	let magazineLetterObjMap = {};
        	magazine.split('').forEach(letter => {
        		if (magazineLetterObjMap[letter]) {
        			magazineLetterObjMap[letter]++;
        		} else {
        			magazineLetterObjMap[letter] = 1;
        		}
            });
            let ransomNoteArray = ransomNote.split('');
        	for (let i = 0; i < ransomNoteArray.length; i++) {
        		if (magazineLetterObjMap[ransomNoteArray[i]]) {
                    magazineLetterObjMap[ransomNoteArray[i]]--;
                    if (magazineLetterObjMap[ransomNoteArray[i]] == -1) {
                        return false;
                    }
        		} else {
                    return false;
                }
            };
            return true;
        };

        console.time('ransomTime');
        console.log(canConstruct(ransomNote, magazine));
        console.log("It took:");
        console.timeEnd('ransomTime');
    }
};