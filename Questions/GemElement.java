// Each rock is composed of various elements and each element is represented by a lower case English letter from 'a' to 'z'. An element can be present multiple times in a rock. An element is called a 'gem-element' if it occurs at least once in each of the rocks.
// Given the list of N rocks with their compositions, display the number of gem-elements that exist in those rocks.
//
// Sample Input :
// [abcdde baccd eeabg abcdded abccd abeeg]
//
// Sample Output :
// 2 (only 'a' and 'b' occur in each of the rocks)


import java.util.*;
import java.lang.*;
import java.io.*;
import java.util.stream.Collectors;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
		List<String> rocks = new ArrayList<>(Arrays.asList("abcdde", "baccd", "eedabg"));
	    countGems(rocks);

	}

	public static void countGems(List<String> rocks) {
        String abcStr = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
        List<String> abc = Arrays.asList(abcStr.split(" "));
        List<String> answer = abc.stream().filter(letter ->
                        rocks.stream().filter(item->item.contains(letter)).count()==rocks.size()).collect(Collectors.toList());

        System.out.println("There are " + answer.size() + " gems. The gems are" + answer.toString());
    }

}
