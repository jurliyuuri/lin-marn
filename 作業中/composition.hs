import Data.List.Split
import qualified Data.Map as M
import Control.Monad
import Data.List
import Data.Function

main :: IO ()
main = do
 arr <- lines <$> readFile "composition3.txt"
 let dat = [ (a,splitOn "\t" bs) | (a:'\t':bs) <- arr]
 let ss = foo dat
 let list = sortBy (compare `on` snd) $ M.toList $ M.fromListWith (+) ss
 forM_ list $ \(a,b) -> do
  putStrLn $ a ++ "\t" ++ show b

foo :: [(Char,[String])] -> [(String, Double)]
foo dat = do
 (_,u) <- dat
 q <- u
 w <- chop' q
 return (w, 1.0/fromIntegral(length u))

chop' :: String -> [String]
chop' ('＊':a:bs) = ['＊',a] : chop' bs
chop' (a:bs) = [a]:chop' bs
chop' [] = []

