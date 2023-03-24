package com.basicIO;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CharacterStream {
    public static void main(String[] args) throws IOException {
        FileReader in = null;
        FileWriter out = null;
        try {
            in = new FileReader("xanadu.txt");
            out = new FileWriter("fileWriterOutput.txt");
            int c;
            while ((c = in.read()) != -1) {
                out.write(c);
            }
        }
         finally {
            if(in != null) {
                in.close();
            }
            if(out != null) {
                out.close();
            }
        }
    }
}
