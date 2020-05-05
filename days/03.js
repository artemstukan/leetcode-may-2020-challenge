module.exports = {
    run() {
        const ransomNote =
            'fejzkavtaxqeqvttndquaamuokgukgmyaieovamgchjlsnsituzqroywlykvqnedbcxpwfpheyerekuqnhcimvjpndbxhrohmlaxmgfsiudfgecqafjvowajmnipzybjuhgecgbaqluolhqndswzttnlhwckdwdjtdyoaskzhqgchlebrjavhtyziisfasprwstfowqgllozuyafkppickwgeyhciyzsrfycoqkfexosjlnxqhvujwssmoqjqofswrgolycjkciuglsyzyzcueqwbmokyhnsbmwonodwbqgdovaxwcyzdvnnldgfurgutjdevhuugqyvbywazyhtqduogosprvanffkzwficmjeihunbbskrtjaefkuriapihawofigbmqdhsfwxpbfnvzfmdsrvgagytagjloxvxuagjdusmztlxvtetufthgzgtjxbqxldyhkuicpxxudpvonjglpctqxplrcvearseyufmcoqythbuntbuhkelpdokrjnvcixhuhemdlisndazpmcnsdhzcjxwayicykrquptukfobwzpcrarzgzmboeprwodbyzeosivvrlhvbhqystxycognpmunvzozhsssneyyccetuidkgjxmercglejvmlmunnoiidtjhhqphzxrsomfsvvmfcigfxrzdzjsomxpqkktlnigojtvivmlvfdvlkdxbnwprjilsehnyjmtctobikssdvjgnyejdifawxufekaakxfwolmhighcqynwmdmciauzesslcdfyrfniyggbewodfhlpvuqtmwqayecojcmwfkrlamsesdaoovpalmeivqxnegcmhxznspmuzubfdkjaxzpwhxaslmivownnbbebqvyyvloerynyltqngcwrljvuboantskjhpbemvilvoavcswdfujxrzhopvkofypximxsrkgallvolqssmrldsccgfhgninxvwhqrktlmxrmzbsqhhhqzfilcbwnamzqxxeueksxvtvvtoxq';
        const magazine =
            'zgzvhchqrctqwqbyeitmlekyaiehrqrcxwmqvvaynyzjvfjwfvtwkfwcbxbznptzpmcxvapwhsipsjrqgahmuntcmxuvgvrzjatxxjhfnerhdawgvesutzdznaepvrgdnczlamnwbfpzfrisnausdnjstfzuxiezbhpfhayxremnlaulcmapvltnrjzddhzpwhidqiswyukziuytzhiuhygmqbxtbqafdtwiafmkqxwhidtnsluynytfguiwbmbfatrrudskfjmvcysmpzknkgmkinjienyljzdmxmradwzqewupfucbqinxqsrjpsvfyilhjrgaxlbbkbsnzrhmrtkqynifvfgzgkfjaadkqmnvdkvirmqttftibpnywankqgujlnxyqqxhnxcpmsfvyvghdluciefjiyziiacstiqrauvmvmmlsxnufjxzikuuxpcrhyadqhmwtshjxfbhuekvphyfnenpnpyruthxndwbdxkpcxbuvjdkipwqbdgjfyukygantkvicvcavjmydtitzurlhnhdfqmhzeprhhnqjjwukiyczgmejrayuuudytfxwkhpfmwqlemgkeawltwxvjxdverxlpnawpxscqcbaisrmlnujpifyqecewcmugfyfyexijyadbwysdjaamfjyjwukvwawtgmhqrufadchlejjwffnynhryuvbjtjljdldiixqurfjcjsuupnewqgshnvxwbkrnbivbxfcvalgmerigiuayuftnbpszkijiywgabwjlatfezizanykzruzqnkeaervdbbuewibtauvnngbsfvwsbaibmvpigkewwbnpvsjsmldamyglaspukkxuxxmyrmyxfkfapwwgizubfabfrcwfagxsburucuqfjjghekqxqebpddevcsknbutyjizqthhlvzvurusnsszbbfzbykqkucdaklkiqxbifeayatqfjcahykzaytehiuwqykfyaigyvxzsrujkrpnwvwwflxxblgxpdjclawccyaehtmregfuutaegqughaxrjnbfkqjhtnsvqilxurpknrzmxnqmlhwlnxxavhnyceecubtmwzcljapwkumbpyhpztngrrpcbwdnqgrnnpufuxzixfpmdbcslkfyewsmbgusveitpyzudivcwtygvdeirizgxywakudzbsvlexcjefvdneizhnumyrzrzktfkkrypcifkjvjlzuuhilxpepkraddpeyvgnuqqlafmiqqtgzfrcjygnmzndsiyhidbkfbepitjgmwaygscyhgbcfcmhtwqbxgmugphfvrbskqwzbihbtazndgpiusmgzxyzwtsxrfdesjqvwbskckzrbgimridmhdeakngemxevqifpjvuxthtxvwuiihikqygbryzmbxhzyvcdblhzrjppjpiarycvvyavfpgvulidsnsbvknvylxfawkcuypnxfjfrsukanwiwspinpbjdbgmkpqbkybadmdzhcaybkfxglyamxvgkcrqcyfnlrvivigpjmgymlrmvaapunpelukmdzynigchlcfrmebysdlmzwistgatmwgxrxwsxpwgytqlbgwxnrxcxwmifeenjzflwkkjnwjwagivcsfknuzceenmkudabhuwdpjycxgrqruyghxyxhkwggbemtbjakvdxdlsylddhtivcsyxbrvvexvyvmcztbjbznmpkmanebqcrdfmiyesqutnqyebcidskhulmanrcwnmdwjzllejaktknnudiluvsehyjmaescpxscsrehbbvieinhwrxjymntluassumgzykdskkyazrhrjmnwhxezvjbveurskjpljsrgjixxwisphbjzpbfemrasrjcnlsuxffcsrjnppipvnqcnghqlatwxhwpmxehucyjutpszwibpgylxlqsvzfqnmxwmcrpdyyvfgjqaiiyh';

        const canConstruct = function(ransomNote, magazine) {
            const magazineLetterObjMap = {};
            magazine.split('').forEach(letter => {
                if (magazineLetterObjMap[letter]) {
                    magazineLetterObjMap[letter]++;
                } else {
                    magazineLetterObjMap[letter] = 1;
                }
            });
            const ransomNoteArray = ransomNote.split('');
            for (let i = 0; i < ransomNoteArray.length; i++) {
                if (magazineLetterObjMap[ransomNoteArray[i]]) {
                    magazineLetterObjMap[ransomNoteArray[i]]--;
                    if (magazineLetterObjMap[ransomNoteArray[i]] == -1) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            return true;
        };

        console.time('ransomTime');
        console.log(canConstruct(ransomNote, magazine));
        console.log('It took:');
        console.timeEnd('ransomTime');
    },
};
